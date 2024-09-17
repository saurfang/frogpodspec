import {p} from "@pcd/podspec";

export const FrogSpec = p.entries({
    name: p.string({ coerce: true }),
    description: p.string({ coerce: true }),
    imageUrl: p.string({ coerce: true }),

    frogId: p.int({ coerce: true }),
    biome: p.int({ coerce: true }).range(BigInt(0), BigInt(6)   ),
    rarity: p.int({ coerce: true }).range(BigInt(0), BigInt(6)),
    temperament: p.int({ coerce: true }).range(BigInt(0), BigInt(6)),
    jump: p.int({ coerce: true }).range(BigInt(0), BigInt(15)),
    speed: p.int({ coerce: true }).range(BigInt(0), BigInt(15)),
    intelligence: p.int({ coerce: true }).range(BigInt(0), BigInt(15)),
    beauty: p.int({ coerce: true }).range(BigInt(0), BigInt(15)),

    timestampSigned: p.int({ coerce: true }),
    owner: p.cryptographic({ coerce: true }),
  });
