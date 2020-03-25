import { CHAMPION } from '../model/Champion';

export const UNRELEASED_CHAMPIONS = [
    // Cosmic
    CHAMPION.DARKPHOENIX,
    CHAMPION.THORREALM,
    // Tech
    CHAMPION.IRONMANREALM,
    // Mutant
    CHAMPION.WEAPONX,
    CHAMPION.STORMREALM,
    // Skill
    CHAMPION.BLACKPANTHERREALM,
    // Science
    CHAMPION.CAPTAINAMERICAREALM,
    CHAMPION.HULKREALM,
    CHAMPION.SPIDERMANREALM,
    // Mystic
    CHAMPION.DRSTRANGEREALM,
    // Universal
    CHAMPION.MAESTRO,
    CHAMPION.THECOLLECTOR,
    CHAMPION.GRANDMASTER,
].reduce((map, champion) => {
    map[ champion ] = true;
    return map;
}, {});
