import type { LocalizationEntry } from './localization';
export interface SurveyTheme {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    localizations: {
        description: LocalizationEntry;
        name: LocalizationEntry;
    };
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: 'surveytheme';
    tenantId: string;
    theme: {
        booleanFalseColor: string;
        booleanHandleColor: string;
        booleanTrueColor: string;
        buttonBackground: string;
        buttonBackgroundHover: string;
        buttonBorder: string;
        buttonBorderHover: string;
        buttonColor: string;
        buttonColorHover: string;
        calendarActiveBackground: string;
        calendarActivetColor: string;
        calendarHighlightBackground: string;
        calendarHighlightColor: string;
        chatMessageInputBackground: string;
        chatMessageInputColor: string;
        clientMessageBackground: string;
        disabledColor: string;
        dropdownBackground: string;
        dropdownTextColor: string;
        footerBackground: string;
        footerIconColor: string;
        headerBackground: string;
        headerIconColor: string;
        inputBackground: string;
        inputBorderColor: string;
        inputColor: string;
        inputFocusBackground: string;
        inputFocusBorderColor: string;
        inputFocusColor: string;
        labelColor: string;
        listHoverColor: string;
        messagesBackgroundColor: string;
        panelBackground: string;
        panelDescriptionColor: string;
        panelTitleColor: string;
        selectedColor: string;
        surveyButtonBackground: string;
    };
    type: string;
}
export interface SurveyUIElement {
    _id: string;
    component: string;
    description: string;
    elements: Array<Record<string, unknown>>;
    icon: string;
    name: string;
    properties: Record<string, unknown>;
    type: string;
}
export interface Survey {
    _id: string;
    allowTabinationMandatoryFields: boolean;
    createdAt: number;
    createdBy: string;
    debug: boolean;
    deletedAt: number;
    description: string;
    expansions?: {
        surveythemeId?: SurveyTheme;
    };
    font?: string;
    height: number;
    hideSurveyBoxShadown: boolean;
    layout: {
        elements: SurveyUIElement[];
        footer?: SurveyUIElement;
        header?: SurveyUIElement;
        overlay?: SurveyUIElement;
    };
    localizations: {
        description: LocalizationEntry;
        name: LocalizationEntry;
    };
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: 'survey';
    showBottomNavigatorPage: boolean;
    showFooter: boolean;
    showHeader: boolean;
    showTabs: boolean;
    showTopNavigatorPage: boolean;
    surveyId: string;
    surveythemeId: string;
    tenantId: string;
    type: string;
    usePanelShadow: boolean;
    width: number;
}
export interface SurveyQuestion {
    [key: string]: unknown;
    question: string;
    value: string | string[];
    valueSelected?: {
        label?: string;
        value?: string;
    };
}
export type SurveyResult = Record<string, SurveyQuestion>;
export interface SaveSurveyResultPayload {
    data: {
        [surveyId: string]: SurveyResult | string | null | undefined | Record<string, unknown>;
        currentSurveyId: string;
        data?: Record<string, unknown>;
        fromSurveyId?: string | null;
    };
    ticketId?: string;
    workitemId: string;
}
//# sourceMappingURL=survey.d.ts.map