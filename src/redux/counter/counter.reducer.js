import { DECREMENT, INCREMENT, RESET } from './counter.types';

export const counterState = {
    counter: 0,
    message: "Not Any Action"
};

export const authReducer = (state = counterState, { type, payload }) => {
    switch (type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + payload,
                message: "Increment"
            }

        case DECREMENT:
            return {
                ...state,
                counter: state.counter + payload,
                message: "Derement"

            }
        case RESET:

            return {
                ...state,
                counter: payload,
                message: "Reset"

            }

        default: {
            return state;
        }
    }
};