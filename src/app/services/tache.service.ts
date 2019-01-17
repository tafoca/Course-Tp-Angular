import { Subject } from "rxjs";

export class TacheService{
    //STEP 1 (Subject Observable): 
    taches = [
        {
         id:1,
         name:'task one - 1',
         status:'stable'
        },
        {
         id:2,
         name:'task two - 2',
         status:'instable'
        },
        {
         id:3,
         name:'task three - 3',
         status:'stable'
        }
      ];
      //--- endStep----
       //STEP 2 : indication type on data manage by Subject
       tacheSubject = new Subject<any[]>();

      /*STEP 3 : créer une méthode qui, quand le service reçoit de nouvelles données,
       fait émettre ces données par le Subject et appeler cette méthode dans toutes 
       les méthodes qui en ont besoin ;*/
       emitTaceSubject() {
        this.tacheSubject.next(this.taches.slice());
      }

    //mettre stable toute les tache
    switchOnAll() {

        for(let tache of this.taches) {
    
          tache.status = 'stable';
    
        }
        this.emitTaceSubject();
    
    }
    //mettre instable toute les taches [dual de switchOnAll() ]
    switchOffAll() {
    
        for(let tache of this.taches) {
    
          tache.status = 'instable';
          this.emitTaceSubject();
        }
    
    }

    //gestion activation ou desactivation une tache par son indice
    switchOnOne(i:number){
        this.taches[i].status = 'stable';
        this.emitTaceSubject();
    }
    
    switchOffOne(i:number){
        this.taches[i].status = 'instable';
        this.emitTaceSubject();
    }

    getTacheById(id:number){
       const tache =  this.taches.find(
         (t)=>{
                return (t.id === id);
            }
        );
        return tache;
    }

    addTache(name: string, status: string) {
        const tache = {
          id: 0,
          name: '',
          status: ''
        };
        tache.name = name;
        tache.status = status;
        tache.id = this.taches[(this.taches.length - 1)].id + 1;
        this.taches.push(tache);
        this.emitTaceSubject();
    }
}