cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)
set(rnoh_checkbox_generated_dir "${CMAKE_CURRENT_SOURCE_DIR}/generated")

file(GLOB rnoh_checkbox_SRC CONFIGURE_DEPENDS *.cpp)
file(GLOB_RECURSE rnoh_checkbox_generated_SRC "${rnoh_checkbox_generated_dir}/**/*.cpp")

add_library(rnoh_checkbox SHARED ${rnoh_checkbox_SRC} ${rnoh_checkbox_generated_SRC})
target_include_directories(rnoh_checkbox PUBLIC
    ${CMAKE_CURRENT_SOURCE_DIR}
    ${rnoh_checkbox_generated_dir}
    ${CMAKE_CURRENT_SOURCE_DIR}/generated/react/render/components/checkbox
)

target_link_libraries(rnoh_checkbox PUBLIC rnoh)