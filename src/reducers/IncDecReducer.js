const initialState=0;

const IncDecReducer=(state=initialState , action)=>{

    if(action.type==="increment")
    {
        return state=state + 1;
    }
    else if(action.type==="decrement")
    {
        if(state>0)
        {
            return state=state-1;
        }
        else{

            return state;
        }
    }
    else
    {
        return state;
    }
}

export default IncDecReducer;