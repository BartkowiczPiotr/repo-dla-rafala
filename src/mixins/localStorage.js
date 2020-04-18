export default {

  methods: {

    app__setLocalStorage(name, data, hours){

      const dataToStore = {
        data,
      };

      if (hours){
      
        const date = new Date();
        const time = date.getTime();
        const expires = time + (hours * 60 * 60 * 1000);

        dataToStore.til = expires;

      }

      const build = JSON.stringify(dataToStore);
      localStorage.setItem(name, build);

    },

    app__getLocalStorage(name){

      const local = JSON.parse(localStorage.getItem(name));

      if (local){

        if (local.til){

          const time = new Date().getTime();

          if (time > local.til){
            this.app__deleteLocalStorage(name);
            return null;
          }

          return local.data;

        }

        return local.data;

      }

      return null;

    },

    app__deleteLocalStorage(name){

      if (name) localStorage.removeItem(name);

    },

  },

};
