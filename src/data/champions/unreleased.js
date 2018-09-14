import { CHAMPION } from '../model/Champion';

export const UNRELEASED_CHAMPIONS = [
    // Cosmic
    CHAMPION.DARKPHOENIX,
    // Tech
    // Mutant
    CHAMPION.EMMAFROST,
    CHAMPION.WEAPONX,
    // Skill
    // Science
    // Mystic
    // Universal
    CHAMPION.MAESTRO,
    CHAMPION.THECOLLECTOR,
].reduce((map, champion) => {
    map[ champion ] = true;
    return map;
}, {});
