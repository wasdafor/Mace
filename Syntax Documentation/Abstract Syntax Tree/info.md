The mace.json file will contain one large language categories map, that have nested language components with internal syntax components, this structure will represent the Abscract syntax tree of the language. 

# Language category
A language category is is a map of key value pairs, where the key will be the id(name) of the category, and the value is either another language catagory map or a language component array.<br>
This id can contain letters, underscores and dashes, and can only be 64 characters long.
<br><br>
The root of the mace.json file will start as a language category map.

<br>**Example of a language category map:**
```json
    {
        "Keyword": [
            // Language components
        ]
        "Statement": {
            // Nested catagories
            "Loop": [
                // Language components
            ]
            "Control": [
                // Language components
            ]
        }
    }
```

# Language component
Every language component must contain an *"id"*, *"name"*, *"type"*, *"syntax"* and optionally a *"description"*.

* **id**:<br>
Can contain letters, underscores and dashes, and can only be 64 characters long.
* **name**:<br> 
Can contain any characters and can be any length.
* **description**:<br>
Can contain any characters and can be any length.
* **type**:<br>
Can only contain one of the following options: Literal, Padded, Line.
  * **Literal**:<br>
  The compontent is treated how is has been defined, nog additional rules are applied.
  * **Padded**:<br>
  The compontent can have any white space around it, with this type you do not have to define this in the component itself.
  * **Line**:<br>
  The compontent is treated as a code line a semicolon will be infered with this type and any whitespace around the line allowed.
* **syntax**:<br>
Can only contain a syntax component or an array of syntax components

<br>**Example of a language component:**
```json
    {
        "id": "MyComponentID",
        "name": "My component name",
        "description": "My component description",
        "type": "MyComponentType",
        "syntax": [] | {
            "type": ,
            "value": 
        }
    }
```    

# Syntax component
Syntax component must contain a *"type"*, *"value"* and optionally a *"name"* and *"description"*.

* **name**:<br> 
Can contain any characters and can be any length.
* **description**:<br>
Can contain any characters and can be any length.
* **type**:<br>
Can only contain one of the following options: Regex, Component, Group, Variants, Repeated.
* **value**:<br>
The value is different based on the given type.
  * **Regex**: <br>
    Use any regex expression to match a piece of the syntax.
    ```regex
       [a-zA-Z0-9]
    ```
  * **Component**:<br>
    Use the path of categories plus the id of the language component seperated by dots to match a piece of the syntax by the rules of the given component.
    ```
        Statement.Control.IfElse
    ```
  * **Group**:<br> 
    Use a syntax component or syntax component array and group this by a name an description.
  * **Variants**:<br>
    Use an array or syntax componets where any of the given components can be matched.
  * **Repeated**:<br>
    Use a syntax component or a syntax component array where the given components can match 1 or more times. 
  * **Optional**:<br>
    Use a syntax component or syntax component array that only optionally need to be present  


<br>**Example of a syntax component:** 
```json      
    {
        "name": "My syntax component name",
        "decription": "My syntax component description",
        "type": "Component",
        "value": "My syntax component value"
    }
```    