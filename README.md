Simple Front-End Application to convert between Eth, Gwei, and Wei, besides other small utilites

No need to ```git clone``` this repo. Application is public at: https://converter-mocha.vercel.app/


## TODO
- [ ] Mobile optimized
- [ ] More conversion functions


## Conversions

### Avalanche

- NanoAvax uint64 = 1
- MicroAvax uint64 = 1000 * NanoAvax
- Schmeckle uint64 = 49*MicroAvax + 463*NanoAvax
- MilliAvax uint64 = 1000 * MicroAvax
- Avax uint64 = 1000 * MilliAvax
- KiloAvax uint64 = 1000 * Avax
- MegaAvax uint64 = 1000 * KiloAvax


### Polkadot / Kusama

Unit;Decimal Places;Conversion to Planck;Conversion to DOT
- Planck;0;1 Planck;0.0000000001 DOT
- Microdot (uDOT);4;104 Planck;0.0000010000 DOT
- Millidot (mDOT);7;107 Planck;0.0010000000 DOT
- Dot (DOT);10;1010 Planck;1.0000000000 DOT
- Million (MDOT);16;1016 Planck;1,000,000.00 DOT


## Hints

DNF: https://stackoverflow.com/questions/4083351/what-does-jquery-fn-mean