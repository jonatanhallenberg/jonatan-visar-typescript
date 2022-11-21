//funktioner

type HelloProperties = {
    name: string,
    age: number,
    isSnowing?: boolean
}

const sayHello = ({ isSnowing, age, name }: HelloProperties): void => {
    console.log('isSnowing:', isSnowing);
    console.log("Hi " + name + ". You are " + age + " years old." + (isSnowing ? " It´s snowing today!" : ""));
}

sayHello({
    name: "Jonatan",
    age: 35
}) 