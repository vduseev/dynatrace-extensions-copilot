import * as vscode from "vscode";

interface CopilotDiagnostic {
  code: string | number | { value: string | number; target: vscode.Uri } | undefined;
  severity: vscode.DiagnosticSeverity;
  message: string;
}

/**
 * Creates a {@link vscode.Diagnostic} from a known Copilot Diagnostic (a.k.a. this extension)
 * @param startPos VSCode Position marking the start of the highlight
 * @param endPos VSCode Position marking the end of the highlight
 * @param diagnostic one of the known Copilot Diagnostics (defined below)
 * @returns VSCode Diagnostic
 */
export function copilotDiagnostic(
  startPos: vscode.Position,
  endPos: vscode.Position,
  diagnostic: CopilotDiagnostic
): vscode.Diagnostic {
  return {
    range: new vscode.Range(startPos, endPos),
    message: diagnostic.message,
    code: diagnostic.code,
    severity: diagnostic.severity,
  };
}

/**
 * ALL KNOWN DYNATRACE EXTENSIONS COPILOT DIAGNOSTICS SHOULD BE CATALOGUED HERE
 * ============================================================================
 * This allow later re-use of the known codes for other features.
 */

export const EXTENSION_NAME_MISSING: CopilotDiagnostic = {
  code: "DEC001",
  severity: vscode.DiagnosticSeverity.Error,
  message: "Extension name is mandatory, but missing.",
};

export const EXTENSION_NAME_TOO_LONG: CopilotDiagnostic = {
  code: "DEC002",
  severity: vscode.DiagnosticSeverity.Error,
  message: "Extension name must not be longer than 50 characters.",
};

export const EXTENSION_NAME_INVALID: CopilotDiagnostic = {
  code: "DEC003",
  severity: vscode.DiagnosticSeverity.Error,
  message: "Extension name is invalid. Must only contain lowercase letters, numbers, hyphens, underscores, or dots.",
};

export const EXTENSION_NAME_NON_CUSTOM: CopilotDiagnostic = {
  code: "DEC004",
  severity: vscode.DiagnosticSeverity.Information,
  message: 'Only custom extensions can be built (name must start with "custom:")'
};