
namespace App {
	
	export function startup() {
		// TODO: Do app initialization here.
		const root = new RootHat();
		document.body.append(root.head);
	}
	
	window.addEventListener("load", startup);
}