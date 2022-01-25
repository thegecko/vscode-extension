import * as vscode from 'vscode';

export const activate = (context: vscode.ExtensionContext): void => {
    const messages = [
        'entrypoint: main',
        `appHost: ${vscode.env.appHost}`,
        `uiKind: ${vscode.env.uiKind === 1 ? 'Desktop' : vscode.env.uiKind === 2 ? 'Web' : 'Unknown'}`
    ];

    vscode.window.showInformationMessage(messages.join('\n'), { modal: true });
};
