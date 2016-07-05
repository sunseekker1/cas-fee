interface IVehicle {
    getSpeed(): number;
    getVehicleType: string;
    isTaxPayed(): boolean;
    isLightsOn(): boolean;
}

interface ILights {
    isLightsOn(): boolean;
    isLightsOff(): boolean;
}

interface IRadio {
    startRadio(): void;
    playCd: void;
    stopRadio(): void;
}

interface IEngine {
    startEngine(): void;
    acelerate(): number;
    stopEngine(): void;
}