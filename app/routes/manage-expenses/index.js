import Route from '@ember/routing/route';

export default Route.extend({
    queryParams:{
        sort:{
            replace:true,
            refreshModel:true
        }
    },

    resetController(controller,isExiting, transition){
        if(isExiting){
            // controller.set('sort',null);
        }
    }
})