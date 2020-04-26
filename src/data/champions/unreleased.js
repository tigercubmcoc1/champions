import { CHAMPION } from '../model/Champion';

export const UNRELEASED_CHAMPIONS = [
    // Cosmic
    CHAMPION.DARKPHOENIX,
    CHAMPION.THORREALM,
    // Tech
    CHAMPION.IRONMANREALM,
    // Mutant
    CHAMPION.WEAPONX,
    // Skill
    CHAMPION.BLACKPANTHERREALM,
    CHAMPION.BLACKWIDOWDEADLY,
    // Science
    CHAMPION.CAPTAINAMERICAREALM,
    CHAMPION.HULKREALM,
    CHAMPION.REDGUARDIAN,
    CHAMPION.SPIDERMANREALM,
    // Mystic
    // Universal
    CHAMPION.MAESTRO,
    CHAMPION.THECOLLECTOR,
    CHAMPION.GRANDMASTER,
].reduce((map, champion) => {
    map[ champion ] = true;
    return map;
}, {});
