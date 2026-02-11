declare module 'hardhat/config' {
  import { HardhatUserConfig } from 'hardhat/types';

  export { HardhatUserConfig };
}

declare module 'hardhat' {
  import { HardhatRuntimeEnvironment } from 'hardhat/types';

  const hre: HardhatRuntimeEnvironment;

  export = hre;
}