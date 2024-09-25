export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    role: 'admin' | 'trainer' | 'athlete';
}

export type Program = {
    id?: number;
    name: string;
    description: string;
    startDate?: Date;
    endDate?: Date;
    status?: 'active' | 'completed' | 'upcoming';
    weeks?: Week[];
    workouts?: Workout[];
}

export type Week = {
    name: string;
    days: Array<Day>;
}

export type Day = {    
    name: string;
    isRestDay?: boolean;
    notes?: string;
    workouts: Array<Workout>;
}

export type Workout = {    
    name: string;
    details: string;
    duration?: number; // in minutes
    intensity?: number; // 1-10 scale
    type?: 'strength' | 'cardio' | 'mixed';
    exercises: Array<Exercise>;
}

export type Exercise = {
    id?: number;
    name: string;
    description?: string; 
    sets: number;
    reps?: number;
    duration?: number;
    restTime?: number;
    intensity?: number;
    equipment?: string;
}	 

export type ProgramAssignment = {
    programId: number;
    userId: number;
    assignedBy: number;
    assignedAt: Date;
}

export interface HelperText {
    error: boolean | null;
    text: string | null;
}
