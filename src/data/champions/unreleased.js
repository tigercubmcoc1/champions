import { CHAMPION } from '../model/Champion';

export const UNRELEASED_CHAMPIONS = [
    // Cosmic
    CHAMPION.DARKPHOENIX,
    // Tech
    CHAMPION.GUILLOTINE2099,
    // Mutant
    CHAMPION.WEAPONX,
    // Skill
    // Science
    CHAMPION.MRFANTASTIC,
    // Mystic
    // Universal
    CHAMPION.MAESTRO,
    CHAMPION.THECOLLECTOR,
].reduce((map, champion) => {
    map[ champion ] = true;
    return map;
}, {});
