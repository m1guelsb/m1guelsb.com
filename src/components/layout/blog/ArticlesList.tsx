"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArticleCard } from "@/components/ui";
import { Article, PaginationResponse } from "@/types";

interface ArticlesListProps {
  articlesData: PaginationResponse<Article>;
}
export const ArticlesList = ({ articlesData }: ArticlesListProps) => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="flex justify-between items-center">
        <h3>Artigos</h3>
        <span className="text-text2">
          {articlesData?.totalElements} artigos
        </span>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[1rem]">
        {articlesData?.content.map(({ ...article }) => (
          <AnimatePresence key={article.id}>
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ y: -5 }}
              style={{ zIndex: `${article.id! + 1}` }}
            >
              <ArticleCard {...article} />
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};
