export class TacheService{
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

    //mettre stable toute les tache
    switchOnAll() {

        for(let tache of this.taches) {
    
          tache.status = 'stable';
    
        }
    
    }
    //mettre instable toute les taches [dual de switchOnAll() ]
    switchOffAll() {
    
        for(let tache of this.taches) {
    
          tache.status = 'instable';
    
        }
    
    }

    //gestion activation ou desactivation une tache par son indice
    switchOnOne(i:number){
        this.taches[i].status = 'stable';
    }
    
    switchOffOne(i:number){
        this.taches[i].status = 'instable';
    }

    getTacheById(id:number){
       const tache =  this.taches.find(
         (t)=>{
                return (t.id === id);
            }
        );
        return tache;
    }
}