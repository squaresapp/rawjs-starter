
namespace App {
	
	/**
	 * "Hats" are another name for controllers.
	 */
	export class RootHat {
		readonly head;
		
		constructor() {
			this.head = raw.div(
				{
					width: "100px",
					height: "100px",
					backgroundColor: "red"
				}
			);
		}
	}
}