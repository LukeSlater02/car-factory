// const addBody = (chassisObject) => {
// 	// Use dot notation to add a new property
// 	chassisObject.body = "Fever"

// 	// Return the chassis that now has a body property on it
// 	return chassisObject
// }

// const addWheels = (chassisObject) => {
//     chassisObject.wheels = 4

//     return chassisObject
// }   

// const addEngine = (chassisObject) => {
//     chassisObject.engine = "4.8L"

//     return chassisObject
// }

// const addSteeringWheel = (chassisObject) => {
//     chassisObject.steeringWheel = "Tilting"

//     return chassisObject
// }

// const addDriveTrain = (chassisObject) => {
//     chassisObject.driveTrain = "Two wheel drive"

//     return chassisObject
// }
// let fordFeverChassis = {};

// const carLot = [];

// const completeCar = (carObject) => {
//     let result = 
//     addBody(carObject); 
//     addWheels(carObject); 
//     addEngine(carObject);
//     addSteeringWheel(carObject);
//     addDriveTrain(carObject);
//     return carLot.push(result);
// };
// completeCar(fordFeverChassis);
// console.log(carLot);


const carLot = [];
// FACTORY FUNCTION
const carFactory = (chassis, body, wheels, engine, steeringWheel, driveTrain) => {
    return carLot.push( {
        chassis,
        body,
        wheels,
        engine,
        steeringWheel,
        driveTrain 

    });
    
};

carFactory("Ford","Fever",4,"4.8 L","Tilting","driveTrain");
carFactory("Nissan","Altima",4,"4.8 L","Tilting","driveTrain");
console.log(carLot);