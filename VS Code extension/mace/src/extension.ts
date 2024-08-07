// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mace" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('mace.MaceInit', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Message form Mace');
	});

	let disposable2 = vscode.commands.registerCommand('mace.MaceRun', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Mace is running');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

vscode.languages.registerHoverProvider('mace', {
	provideHover(document: { getText: () => any; }, position: any, token: any) {
		//console.log(document.getText(new vscode.Range(position,5)));
		return {
			contents: [document.getText()]
		};
	}
});

// This method is called when your extension is deactivated
export function deactivate() { }

//To package the extention use the folling commands
//(PowerShell)
//Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
//Now edit the README.md file else you can not create a package
//(Project root)
//vsce package
//npm run compile
//(PowerShell)
//Set-ExecutionPolicy Restricted -Scope CurrentUser