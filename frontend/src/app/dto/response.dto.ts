import { Page } from "./page.dto";

export interface AppResponse {
    status: string;
    message: string | null;
    data: Page;
}
