/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
// tslint:disable-next-line:no-unused-variable
import {TxData, TxDataPayable} from './common';
import {promisify} from '@0xproject/utils';
import {classUtils} from './common';
import {BigNumber} from 'bignumber.js';
import * as Web3 from 'web3';

import {BaseContract} from './base_contract';

export class PermissionsLibContract extends BaseContract {
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>) {
        super(web3ContractInstance, defaults);
        classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
