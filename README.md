Simple Front-End Application to convert between Eth, Gwei, and Wei. 

No need to ```git clone``` this repo. Application is public at: https://converter-mocha.vercel.app/

The goal of the converter is to become a useful "all-in-one-converter" for every commong conversion-task of ethereum developers. If you need more conversions, like from ETH to USDT, or from Gwei to Cent, do a pull request or open an issue

## TODO
- [ ] Fix rounding errors for floating point values
- [ ] Migrate to nextJS
- [ ] Implement [ethereumjs](https://github.com/ethereumjs/ethereumjs-units)
- [ ] Implement more conversions
- [X] Dark theme
- [ ] Make Dark theme D.R.Y.
- [ ] Mobile optimized
- [ ] Reinvent the modal-dialogue
- [ ] implement EIP-newsfeed


## Conversions

### Avalanche

NanoAvax uint64 = 1
MicroAvax uint64 = 1000 * NanoAvax
Schmeckle uint64 = 49*MicroAvax + 463*NanoAvax
MilliAvax uint64 = 1000 * MicroAvax
Avax uint64 = 1000 * MilliAvax
KiloAvax uint64 = 1000 * Avax
MegaAvax uint64 = 1000 * KiloAvax


### Polkadot / Kusama

Unit	    Decimal Places	Conversion to Planck	Conversion to DOT
Planck	        0	        1 Planck	            0.0000000001 DOT
Microdot (uDOT)	4	        104 Planck	            0.0000010000 DOT
Millidot (mDOT)	7	        107 Planck	            0.0010000000 DOT
Dot (DOT)	    10	        1010 Planck	            1.0000000000 DOT
Million (MDOT)	16	        1016 Planck	            1,000,000.00 DOT



## Hints

Use jquery's .fn to write the themeSwitch function:
https://stackoverflow.com/questions/4083351/what-does-jquery-fn-mean