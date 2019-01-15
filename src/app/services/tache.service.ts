export class TacheService{
    taches = [
        {
         name:'task one - 1',
         status:'stable'
        },
        {
         name:'task two - 2',
         status:'instable'
        },
        {
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
}