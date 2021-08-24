class ProjectsController < ApplicationController
    def index
        projects = Projects.all
        render json: projects
    end 
    def create 
        project = Project.create(production_params)
        if project.valid?
            render json:production
        else
            render json: {error: production.errors.full_messages} 
        end 
    end 
    
    private 

    def production_params
        params.require(:project).permit(:title, :genre, :description, :budget, :image, :director, :artistic_director, :ongoing)
    end 

end
