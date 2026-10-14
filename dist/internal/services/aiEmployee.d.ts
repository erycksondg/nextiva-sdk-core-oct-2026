import { type InjectionContainer } from '../dependencyInjectionContainer';
import type { EventsService, LoggerService } from '../../services';
export declare class AIEmployeeService {
    protected eventsService: EventsService;
    protected logger: LoggerService;
    constructor({ eventsService, loggerService, }: Pick<InjectionContainer, 'eventsService' | 'loggerService'>);
    private handleAiEmployeeUpdatedNotification;
}
//# sourceMappingURL=aiEmployee.d.ts.map