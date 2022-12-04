import { assert } from "chai";
import RegresApi from "../pages/regres.api";
import {INVALID_REGISTER, ERROR_REGISTER_MESSAGE} from '../data/user.data'

describe('Register', () => {
    it('Should unsucessful register when insert invalid data', async () => {
        const response = await RegresApi.register(INVALID_REGISTER);
        
        assert.equal(response.status, 400);
        assert.containsAllKeys(response.data, ["error"]);
        assert.isString(response.data.error)
        assert.equal(response.data.error, ERROR_REGISTER_MESSAGE.error)
    })
})