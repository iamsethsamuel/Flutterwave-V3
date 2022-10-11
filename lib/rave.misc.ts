import get_bal from '../services/misc/rave.balances';
import balances_currency from '../services/misc/rave.balances-currency';
import bankBVN from '../services/misc/rave.bvn';
import resolve_act from '../services/misc/rave.resolve.account';
import { BalanceCurrencyPayload, BVNPayload, ResolveAccountPayload } from '../services/misc/types';
import RaveBase from './rave.base';


/**
 * This class contains information about APIs that are useful for handling additional non-core management operations. With the APIs described here, 
 * You can manage wallet balances, resolve payment details (BVN, Account details, etc.), get fx rate for transactions and querying balance history.
 */
export default class Misc {
	private rave: RaveBase;
	constructor(arg: RaveBase) {
	  this.rave = arg;
	}
	/**
	 * This endpoint allows you query the balance for a specific wallet.
	 * 
	 * @link https://developer.flutterwave.com/reference/endpoints/misc#get-a-single-wallet-balance
	 */
	bal_currency (data: BalanceCurrencyPayload) {

		return balances_currency(data, this.rave);
	}
	/**
	 * This endpoint allows you query the balances for all your wallets.
	 * 
	 * @link https://developer.flutterwave.com/reference/endpoints/misc#get-multiple-wallet-balances
	 */

	bal (data?: {}) {

		return get_bal(data, this.rave);
	}

	/**
	 * Bank Verification Number or BVN is a biometric identification widely used by Banks in Nigeria. 
	 * This endpoint allows you to fetch a user's information from their BVN. It supports only BVNs generated by Nigerian Banks.
	 * 
	 * @link https://developer.flutterwave.com/reference/endpoints/misc#resolve-bvn-details
	 */

	bvn (data: BVNPayload) {

		return bankBVN(data, this.rave);

	}
	/**
	 * This endpoint helps you to resolve the details of a bank account from an account number. 
	 * Please note that only Nigerian bank details can be resolved using this endpoint. You can also resolve MPesa details and Flutterwave account details with this endpoint.
	 * 
	 * @link https://developer.flutterwave.com/reference/endpoints/misc#resolve-account-details
	 */
	verify_Account (data: ResolveAccountPayload) {

		return resolve_act(data, this.rave);

	}
}