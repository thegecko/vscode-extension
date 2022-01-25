import * as vscode from 'vscode';

export const activate = (context: vscode.ExtensionContext): void => {
    vscode.window.showInformationMessage('Launch: browser');
    vscode.window.showInformationMessage(`Host: ${vscode.env.appHost}`);
    vscode.window.showInformationMessage(`UI: ${vscode.env.uiKind === 1 ? 'desktop' : vscode.env.uiKind === 2 ? 'web' : 'unknown'}`);
};
