import { CHAMPION } from '../model/Champion';

export const UNRELEASED_CHAMPIONS = [
    // Cosmic
    CHAMPION.DARKPHOENIX,
    CHAMPION.THORREALM,
    // Tech
    CHAMPION.IRONMANREALM,
    // Mutant
    CHAMPION.WEAPONX,
    CHAMPION.STORMPYRAMIDX,
    // Skill
    CHAMPION.BLACKPANTHERREALM,
    // Science
    CHAMPION.CAPTAINAMERICAREALM,
    CHAMPION.HULKREALM,
    CHAMPION.SPIDERMANREALM,
    // Mystic
    CHAMPION.SORCERERSUPREME,
    // Universal
    CHAMPION.MAESTRO,
    CHAMPION.THECOLLECTOR,
    CHAMPION.GRANDMASTER,
].reduce((map, champion) => {
    map[ champion ] = true;
    return map;
}, {});
