import  {ClassModel}  from '../models/class.Model/class.Model';

class ClassServices {
	getClassByIDUser = async (IDUser: number) => {
		try {
			const classes = await ClassModel.find();
			if (classes.length === 0) {
				return {
					data: null,
					message: 'can not find class',
					status: 400,
				};
			}
			return {
				data: classes,
				message: 'Success',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
	createClass = async (IDUser: number, CodeClass: string, Title: string, Theme: string, Part: string, Image: string, Room: number ) => {
		try {
			const createClass = new ClassModel({
                IDUser: IDUser,
                CodeClass: CodeClass,
                Title: Title,
                Theme: Theme,
                Part: Part,
                Image: Image,
                Room: Room,
            })
			const saveClass = await createClass.save();
            return {
				data: saveClass,
				message: 'Create Class Success',
				status: 200,
			};

		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
}
export const classServices = new ClassServices()