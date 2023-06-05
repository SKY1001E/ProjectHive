export interface Task {
    id: number,
    name: string,
    description: string,
    startDate?: Date,
    endDate?: Date,
    status: string,
    priority: number,
    userId?: number,
    projectId: number,
    managerId: number
}
