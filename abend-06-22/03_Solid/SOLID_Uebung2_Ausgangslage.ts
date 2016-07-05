interface IVehicle {
    getSpeed(): number;
    getVehicleType: string;
    isTaxPayed(): boolean;
    isLightsOn(): boolean;
    isLightsOff(): boolean;
    startEngine(): void;
    acelerate(): number;
    stopEngine(): void;
    startRadio(): void;
    playCd: void;
    stopRadio(): void;
}