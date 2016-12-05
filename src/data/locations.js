export default [{
    id: "firstRoom",
    name: "First Room",
    onEnter:
`Welcome to the first room. This is testing test, let's see, how much can I fit
in here, Welcome to the first room. This is testing test, let's see, how much
can I fit in here.`,
    canTravelTo: ["secondRoom"],
    items: [{
        id: "key",
        name: "Mysterious key",
        onPickup: "You picked up the mysteriously looking key."
    }],
    places: [{
        id: "corner",
        name: "Dark Corner",
        onInvestigate: {
            message: "Strange mud is dripping down from the ceiling.",
            unlockItem: {
                item: {
                    id: "mudball",
                    name: "Ball of Mud",
                    onPickup: "This disgusting ball of mud won't be useful at all."
                },
                afterUnlockMessage: "You have plenty of this stupid mud."
            }
        }
    }, {
        id: "table",
        name: "Broken table",
        onInvestigate: {
            message:
`The table seems like it was pretty fancy, before some thing ate big chunk of
it. Someithing seems to be locked in its drawer.`
        }
    }, {
        id: "drawer",
        name: "Locked drawer",
        onInvestigate: {
            message: "The drawer is locked, it seems like a place for old rustic key."
        }
    }]
}, {
    id: "secondRoom",
    name: "Hallway",
    onEnter:
`You went into the second room. There's a goblin sitting here.`,
    canTravelTo: ["firstRoom", "thirdRoom"],
    items: [],
    places: [{
        id: "puddle",
        name: "Puddle of water",
        onInvestigate: {
            message: "There's nothing in this room, that could create this puddle."
        }
    }]
}, {
    id: "thirdRoom",
    name: "Lockers",
    onEnter:
`You stay in the middle of small dark room. be careful about what you can find
in here.`,
    canTravelTo: ["secondRoom"],
    items: [{
        id: "orb",
        name: "Black orb"
    }, {
        id: "fish",
        name: "Gold fish"
    }]
}]
