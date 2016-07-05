interface IButton {
	src: string;
	name: string;
	onload: (event) => void;
}

class Button implements IButton{
	//Example of getter and setter function
	private _src: string;
	public name: string;
	public onload: (event: any) => void; //no typing specified
	
	get src(): string{return this._src;}
	set src(value: string) {this._src = value;}
}

class PrincipalsExample {
	public buttons: Array<IButton> = [new Button(), new Button(), new Button()];
		
	constructor(){
		for(let btn of this.buttons) {
			let index = this.buttons.indexOf(btn) + 1; //index is zero based
			btn.src = `button${index}.png`;
			btn.name = `coin${index}`;
			btn.onload = (e) => this.onLoad(e);
		}
	}
	
	private onLoad(e): void {
		for(let btn of this.buttons){
			if(btn.name == e.target.name) {
				btn.src = `${name}Hover.png`;
			}	
		}
	}
}

let example = new PrincipalsExample();

for(let btn of example.buttons){
	console.log(btn.src + ', ' + btn.name + ', ' + btn.onload);	
}