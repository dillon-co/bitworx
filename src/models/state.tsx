export interface User {
    walletAddress: string;
    username: string
}

export type LoginResponse = {
    authenticated: boolean;
    error: string | null;
    user: User | null;
}

export type LogoutResponse = {
    authenticated: boolean;
    error: string | null;
    user: User | null;
}

export interface JobPost {
    title: string;
    budget: number;
    description: string;

}

export default interface State {
    user?: User | undefined | null;
    loading: boolean;
    jobPosts?: JobPost[];
}