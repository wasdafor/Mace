The mace.json file will contain one large array of language components, These components will be represented as an Abscract syntax tree.

# Language components
Every language component must contain an *"id"*, *"name"*, *"type"*, *"syntax"* and optionally a *"description"*.

* **id**:<br>
Can contain letters, underscores and dashes, and can only be 64 characters long.
* **name**:<br> 
Can contain any characters and can be any length.
* **description**:<br>
Can contain any characters and can be any length.
* **type**:<br>
Can only contain one of the following options: Identifier, Expression, ValueLiteral, Scope, Declaration, Statement.
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

# Syntax components
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
  * **Component**:<br>
    Use the id of a language component to match a piece of the syntax by the rules of the given component.
  * **Group**:<br> 
    Use a syntax component or syntax component array and group this by a name an description.
  * **Variants**:<br>
    Use an array or syntax componets where any of the given components can be matched.
  * **Repeated**:<br>
    Use a syntax component or a syntax component array where the given components can match 1 or more times. 


<br>**Example of a syntax component:** 
```json      
    {
        "name": "My syntax component name",
        "decription": "My syntax component description",
        "type": "Component",
        "value": "My syntax component value"
    }
```    