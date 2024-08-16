The mace.json file will contain one large language categories map, that have nested language components with internal syntax components, this structure will represent the Abscract syntax tree of the Mace programming language. 

# Language category
A language category is is a map of key value pairs, where the key will be the id(name) of the category, and the value is either another language catagory map or a syntax component array.<br>
This id can contain letters, underscores and dashes, and can only be 64 characters long.
<br><br>
The root of the mace.json file will start as a language category map.

<br>**Example of a language category map:**
```json
    {
        "Keyword": [
            // Syntax components
        ]
        "Statement": {
            // Nested catagories
            "Loop": [
                // Syntax components
            ]
            "Control": [
                // Syntax components
            ]
        }
    }
``` 

# Syntax component
Syntax components must contain a *"type"*, *"value"* and optionally an *"id"* *"name"* and *"description"*.

* **id**:<br>
Can contain letters, underscores and dashes, and can only be 64 characters long.
* **name**:<br> 
Can contain any characters and can be any length.
* **description**:<br>
Can contain any characters and can be any length.
* **type**:<br>
Can only contain one of the following options: Match, Parameter, Component, Group, Variants, Repeated.
* **value**:<br>
The value will be different based on the given type.
  * **Match**: <br>
    Define any regex expression to match a piece of the syntax.
    ```regex
       [a-zA-Z0-9]
    ```
  * **Parameter**:<br>
    Define a default syntax component (array).
    The parameter component will be replaced by the given syntax component in the component syntax.
  * **Component**:<br>
    Define the path of the categories plus the id's of the syntax components seperated by dots to match a piece of the syntax by the rules of the given component.
    ```
        Statement.Control.IfElse
    ```

    Replace the paramters of a given component by defining the path inside an array at index 0, and the following elements will be the parameters in order and must bedefined in the form of syntax components. Use null to keep the default parameter value.
    ```
      [
        "Statement.Control.IfElse",
        {
          "type": "Match"
          "Value": "if"
        },
        null,
        {
          "type": "Match"
          "Value": "else"
        },
      ]
    ```
  * **Group**:<br> 
    Define a syntax component (array) and group this by an id, name and description.
  * **Variants**:<br>
    Define an array of syntax componets where any of the given components can be matched.
  * **Repeated**:<br>
    Define a syntax component (array) where the given component(s) can match 1 or more times. 
  * **Optional**:<br>
    Define a syntax component (array) that only optionally needs to be matched. 


<br>**Example of a syntax component:** 
```json      
    {
        "id": "MySyntaxComponentId"
        "name": "My syntax component name",
        "decription": "My syntax component description",
        "type": "Match",
        "value": "My regex pattern"
    }
```    