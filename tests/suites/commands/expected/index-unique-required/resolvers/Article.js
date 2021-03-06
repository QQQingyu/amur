module.exports = {
  Query: {
    async article(root, { _id }, ctx) {
      const { Article } = ctx.models;
      return await Article.findById(_id);
    },
    async articles(root, { _ }, ctx) {
      const { Article } = ctx.models;
      return await Article.find();
    }
  },
  Mutation: {
    async createArticle(root, { input }, ctx) {
      const { Article } = ctx.models;
      return await Article.create(input);
    },
    async updateArticle(root, { _id, input }, ctx) {
      const { Article } = ctx.models;
      return await Article.findByIdAndUpdateByMerge(_id, input);
    },
    async deleteArticle(root, { _id }, ctx) {
      const { Article } = ctx.models;
      return await Article.findByIdAndDelete(_id);
    }
  }
};
