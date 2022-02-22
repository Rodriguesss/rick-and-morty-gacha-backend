import joi from 'joi'

const userRegisterSchema = joi.object({
	nickname: joi.string().min(2).max(8).required(),
	email: joi.string().email().required(),
	password: joi.string().min(3).max(15).required()
})

const userLoginSchema = joi.object({
	nickname: joi.string().min(2).max(8).required(),
	password: joi.string().min(3).max(15).required(),
});

export { 
	userRegisterSchema,
	userLoginSchema
}