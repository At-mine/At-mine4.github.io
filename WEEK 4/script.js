var names=new Array();
names[0]="Akhil";
names[1]="Javed";
names[2]="Sandy";
names[3]="John";
names[4]="Saicharan";
names[5]="Imran";
names[6]="Rohith";
names[7]="jason";
names[8]="Murugan";
names[9]="Teja";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}