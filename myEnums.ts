//enumeration (enums)
//where you need three restrictive option in that case enum will serve you best
const   // put const before enum and it won't create any crazy code in js
enum SeatChoice {
    AISLE = 'aisle',
    MIDDLE = 3,
    WINDOW,
    FOURTH 
}

const mtSeat  = SeatChoice.AISLE;