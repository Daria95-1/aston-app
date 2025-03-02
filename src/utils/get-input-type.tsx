export const getInputType = (isVisible: boolean): 'text' | 'password' => 
    isVisible ? 'text' : 'password';
