function pospesevanje(maxmoc: number, cm: number) {
    moc = 0
    motors.largeBC.setBrake(false)
    while (moc < maxmoc) {
        motors.largeBC.tank(moc, moc, cm)
        plus = cm + moc
        moc = moc + plus
        control.waitMicros(100000)
    }
}
let moc = 0
let plus = 0
let cm = 0