export type TextDecorationTask = "bulleted_to_paragraph" | "paragraph_to_bulleted" | "rephrase_formal" | "rephrase_friendly" | "rephrase_neutral" | "rephrase_short" | "rephrase_with_length" | "rephrase" | "text_to_email_format";
export interface TextDecoration {
    options: Record<string, unknown>;
    task: TextDecorationTask;
    text: string;
}
//# sourceMappingURL=textDecoration.d.ts.map