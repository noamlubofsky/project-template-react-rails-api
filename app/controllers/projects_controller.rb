class ProjectsController < ApplicationController
    skip_before_action :authorize
    def index
        projects = Project.all
        render json: projects
    end 
    def create 
        project = Project.create(project_params)
        if project.valid?
            render json:project
        else
            render json: {error: project.errors.full_messages} 
        end 
    end 
    
    private 

    def project_params
        params.require(:project).permit(:name, :description, :github_link, :youtube_link, :likes, :image)
    end 

end
