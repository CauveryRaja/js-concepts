function useUser() {
    let variable;
    
    function setVariable(value) {
        console.log('setting...', value);
        variable = value;
    }

    // return [
    //     variable,
    //     setVariable
    // ]

    return (function(state, setState) {
        return [state, setState]
    })(variable, setVariable);
}

const [user, setUser] = useUser();

setUser('ram');

console.log(user);