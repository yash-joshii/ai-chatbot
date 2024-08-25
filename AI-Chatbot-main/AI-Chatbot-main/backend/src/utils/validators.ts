
import { ValidationChain, body, validationResult} from "express-validator";

export const validate =  (validations: ValidationChain[]) => {
    return async (req, res, next) =>{
        for (let validation of validations){
            const result = await validation.run(req)
            if(!result.isEmpty()) break;
        }

            const errors = validationResult(req);
            if(errors.isEmpty()) {
                return next();
            }
            return res.status(422).json({errors: errors.array() })
        
    }
}

export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Password should be of 8 length")
  ];

export const signupValidator = [
  body("name").notEmpty().withMessage("Name is required"),
//   body("email").trim().isEmail().withMessage("Email is required"),
//   body("password")
//     .trim()
//     .isLength({ min: 6 })
//     .withMessage("Password should be of 8 length")               // we can also use this 

...loginValidator,                        //it is just a second method 
];


export const chatCompletationValidator = [
    body("message").notEmpty().withMessage("Message is required"),
                           
  ];